# Install dependencies
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash;
source ~/.bashrc;
nvm --version;
nvm install 12; # or install the latest version with `nvm install node`
nvm use 12;
node --version;
npm install --global yarn
npm i -g pm2
cd ./front-end && yarn install;
cd ../back-end && yarn install;
