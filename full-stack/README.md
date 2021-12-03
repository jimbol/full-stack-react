## Set up Netlify
Netlify is a dead simple way of deploying static sites.

Open spotify, connect your repository, configue the build, and its ready!

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

### Install Dependencies
Run the install script. In this repo, that lives inside the `full-stack` folder.
```
cd full-stack;
bash install;
```
This installs Git, Node, and Yarn, as well as installing our dependencies.
