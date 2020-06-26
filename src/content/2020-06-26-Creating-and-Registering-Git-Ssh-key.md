---
title: "Creating & Registering Git SSH Key"
date: "2020-06-26"
draft: false
path: "/blog/Creating-and-Registering-Git-Ssh-Key"
thumbnail: ../images/post1.svg
description: "How to generate & register SSH key, and use it with your GitHub account."
---
* When trying to "git clone" a repo,  you may run into the following error:
```
git@github.com: Permission denied (publickey).
fatal: Could not read from remote repository.
Please make sure you have the correct access rights
and the repository exists.
```

 
* This may happen when you try to access a repo that is private without the right access rights.
* To show you do have the right access rights to the repo, you need a SSH key registered at your local.


### 1. Checking & creating .ssh directory
* Change directory to your home.
* ls -al to see if the .ssh directory exists. It is usually where the SSH keys are saved.
```
$ cd ~
$ ls -al 
```
* If you don't have a .ssh directory, create one.
```
$ mkdir ~/.ssh
$ chmod 700 ~/.ssh
```

### 2. Creating a SSH key
* Change directory to .ssh
* Enter ssh key generating command using a mail address registered at your Github account.
* Where to generate the key is up to you, but you can press enter to use the default location.
* Enter your passphrase, then re-confirm it. 
```
$ cd .ssh
$ ssh-keygen -t rsa -b 4096 -C "your@mail.com"
Generating public/private rsa key pair.
Enter file in which to save the key (/home/user/.ssh/id_rsa):
Enter passphrase (empty for no passphrase): 
Enter same passphrase again:
```
* The below signifies the completion of SSH key generation.
```
Your identification has been saved in /home/user/.ssh/id_rsa.
Your public key has been saved in /home/user/.ssh/id_rsa.pub.
The key fingerprint is:
SHA256:(some encrpytion) your@mail.com
The key's randomart image is:
+---[RSA 4096]----+
| Eo+X+.          |
|+O.B.O           |
|+.  @ =          |
|o. B *   o .     |
|. . B = S o      |
|   . = + .       |
|    o =          |
|   .         =   |
|                 |
+----[SHA256]-----+
```
* Check the created keys in .ssh. Your .ssh will show:
```
id_rsa
id_rsa.pub
```
* `id_rsa` is private key, and `id_rsa.pub` is public key. 
 
### 3. Registering private SSH key to ssh-agent
* First check ssh-agent is intact.
* Then add private key to ssh-agent. 
* You would need your passphrase.
```
$ eval $(ssh-agent -s)
agent pid (some number e.g. 29904)
$ ssh-add ~/.ssh/id_rsa
```

### 4. Registering public key to GitHub account
* Go to your account setting.
* On the left sidebar, click on 'SSH and GPG keys'.
* On the right to 'SSH keys', click on 'New SSH key'.
* Go back to your terminal, and find out your public key using the below command.
```
$ cat ~/.ssh/id_rsa.pub
```
* Copy everything starting from `ssh-rsa` to `your@mail.com`.
* Go back to GitHub settings page, paste what you copied into **Key**.  







