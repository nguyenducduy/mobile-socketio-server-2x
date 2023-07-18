# mobile socket.io server v2

Use for nativescript-socketio library (only support socket.io version 2x)

### Step deploy to dokku

1. Access to vps installed dokku
   `ssh root@<dokku-ip>`

2. Added `Procfile`

```
web: node index.js
```

3. Create app on Dokku server (on Server)

```
dokku apps:create mobile-socketio-server
```

4. Add repo to Dokku server (on Local)

```
git remote add dokku dokku@<dokku-ip>:mobile-socketio-server
```

5. Add ssh public-key to deploy (on Local)

```
cat ~/.ssh/id_rsa.pub | ssh root@<dokku-ip> dokku ssh-keys:add MACBOOK2014
```
