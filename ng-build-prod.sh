#!/usr/bin/bash
cd /home/ec2-user/cloudonedemo/c1-demo-app
ng build --prod --localize
sudo rm -rf /var/www/c1-demo-app/
sudo cp -R /home/ec2-user/cloudonedemo/c1-demo-app/dist/ /var/www/c1-demo-app/
sudo chown -R nginx:nginx /var/www/c1-demo-app/
sudo systemctl restart nginx
sudo systemctl status nginx