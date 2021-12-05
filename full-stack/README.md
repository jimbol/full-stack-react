## Set up EC2 Hosting
This is where we will host our API and database
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

## Start mongodb on EC2
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
## Start API
### Install Dependencies
Run the install script. In this repo, that lives inside the `full-stack` folder.
```
cd full-stack/back-end;
bash install.sh;
```
This installs Git, Node, and Yarn, as well as installing our dependencies.

### Starting
Start on a private port. We'll use port 5000
```
pm2 start "port=5000 client=https://gallant-albattani-8c05b5.netlify.app node --es-module-specifier-resolution=node src/index.js"
```

Set up routing of traffic from port 80 to port 5000. This way we wont have to specify a port in the url.
```
sudo iptables -t nat -L
sudo iptables -t nat -A PREROUTING -p tcp --dport 80 -j REDIRECT --to-ports 5000
```

Now we should be able to hit our API. `http://ec2-ADDRESS.REGION.compute.amazonaws.com/test`
