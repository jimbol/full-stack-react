# Install dependencies
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash;
source ~/.bashrc;
nvm --version;
nvm install node; # or install specific version. nvm install 16; nvm use 16;
node --version;
npm install --global yarn
npm i -g pm2
yarn install;
