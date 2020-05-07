#! /bin/bash
## iniciar novo projeto React native
npx react-native init <nome do projeto>

#rodar react-native
npx react-native start

#buildar projeto
cd android && ./gradlew clean && cd .. && npx react-native run-android

##configurar editorconfig
vim .editorconfig

#instalar eslint
yarn add eslint -D

##iniciar confg do eslink
yarn eslint --init

##reconfig yarn
yarn

##instalar estensões
yarn add prettier eslint-config-prettier eslint-plugin-prettier babel-eslint -D

## Intall watchman for live reaload
sudo apt install -y autoconf automake build-essential libtool pkg-config libssl-dev python-dev

cd ~ &&  git clone https://github.com/facebook/watchman.git
cd watchman
git checkout v4.9.0
./autogen.sh
./configure --enable-lenient
make
make install

## Install reactotron
cd ~ && wget https://github.com/infinitered/reactotron/releases/download/v2.17.1/reactotron-app_2.17.1_amd64.deb
sudo dpkg -i reactotron-app_2.17.1_amd64.deb
reactotron-app_2

yarn add reactotron-react-native

## instalação rotas
yarn add @react-navigation/native
yarn add react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view
yarn add @react-navigation/stack

##IOS
#instalar cocoapods
cd ios && npx pod-install ios
