# Set up EC2 Hosting
We will host the front-end, back-end, and mongo db on an EC2 instance. This guide teaches how to:

1. Start and connect to an EC2 Instance
2. Start MongoDB on an EC2 Instance
2. Start our application on an EC2 Instance

---

## Start and connect to an EC2 Instance
### Start launching

- In AWS, go the the EC2 dashboard.
- Click "Launch Instances".
- Select a Free Tier Eligible Amazon Linux box, size "micro"
- Click "Review and Launch"

### Provide permission for ssh and web requests

- Click "Edit Security Groups"
- Add a "HTTP" security rule allowing http access.

### Launch and get ssh key

- Click "Launch"
- Create a new key pair, provide a name, and download it
- Launch your EC2 instance
- Move it somewhere you'll remember
```mv ~/Downloads/fullstackclass.pem ~/.ssh/fullstackclass.pem```
- Change the file permissions so it can be used by `ssh`
```chmod 400 ~/.ssh/fullstackclass.pem```

### Connect via ssh
- In the AWS EC2 console, open the instance we created and grab the public IP.
- Use the ssh key to connect.
```
ssh -i "~/.ssh/fullstackclass.pem" ec2-user@18.224.52.118
```
- You will be prompted to verify the key fingerprint, type "yes" and press "enter"
- You're in!

---

## Start MongoDB on an EC2 Instance
Add the mongo db connection, the api bootup fails without the db present. I'm using [this guide](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-amazon/).

First take the role of a root user.
```
sudo su
```

Add configuration for mongodb in Yum. Create the following file.
```
touch /etc/yum.repos.d/mongodb-org-5.0.repo
```

And modify it...
```
vi /etc/yum.repos.d/mongodb-org-5.0.repo
```

...with the following configuration.
```
[mongodb-org-5.0]
name=MongoDB Repository
baseurl=https://repo.mongodb.org/yum/amazon/2/mongodb-org/5.0/x86_64/
gpgcheck=1
enabled=1
gpgkey=https://www.mongodb.org/static/pgp/server-5.0.asc
```


Then install
```
sudo yum install -y mongodb-org
```

And start mongo!
```
sudo systemctl start mongod
```

---
## Start our application on an EC2 Instance

### Pull repository
Install git and clone our repository on the server.

### Install Dependencies
Run the install script. In this repo, that lives inside the `full-stack` folder. Be sure to read `install.sh` to understand what is being installed. This project uses an older version of Node, Node 12, you may need to update the `install.sh` to match the version of Node you are using locally.

```
cd full-stack;
bash install.sh;
```
This installs Git, Node, and Yarn, as well as installing our application dependencies on the front- and back-end.

### Starting
We'll start the server using pm2. pm2 is a tool to manage running production applications. Our application is set up to run on port 5000.
```
cd back-end;
pm2 start "node --es-module-specifier-resolution=node src/index.js";
```

I have included a script in the `back-end/package.json` to run this. So you can run `yarn server` instead of all the above code.

#### Routing
Set up routing of traffic from port 80 to port 5000. Port 80 is a special port for http requests that allows us to not specify a port in the url. I.e. Instead of having to visit `ec2-XXXXX.REGION.com:5000/test` we can visit `ec2-XXXXX.REGION.com/test`.

We can use `iptables` to route between ports.
```
sudo iptables -t nat -A PREROUTING -p tcp --dport 80 -j REDIRECT --to-ports 5000
```

Then view your route table
```
sudo iptables -t nat -L
```

If your have multiple routes for the same port, you'll potentially have issues. You can remove a route by switching the `-A` in the command above with a `-D`.

---
## All set!

Now we should be able to hit our application at. `http://ec2-ADDRESS.REGION.compute.amazonaws.com`.

And we should be able to hit our API. `http://ec2-ADDRESS.REGION.compute.amazonaws.com/test`

