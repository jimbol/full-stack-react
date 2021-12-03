curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash;
source ~/.bashrc;
nvm --version;
nvm install node;
node --version;
npm install -g nodemon;
npm install ./back-end;
npm install ./front-end;
