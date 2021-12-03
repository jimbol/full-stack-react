## Set up EC2 Hosting
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
**Git**

- First install git `sudo yum install git -y`
- Confirm its installed `git --version`

**Node**
- Then nvm `curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash`
- Reload .bashrc to provide access to nvm `source ~/.bashrc`
- Confirm its installed `nvm --version`
- Install Node `nvm install node`
- Check that Node is running `node --version`
- Install nodemon `npm install -g nodemon`
**Start Application**
- Clone our repo `git clone git@github.com:jimbol/full-stack-react.git`

