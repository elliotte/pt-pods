## Developer setup

 ```bash
Clone repo > npm install 
Ensure you have mongo installed including bash CLI
```

## Database interaction

 - Connect to the mongo DB using bash and command;

 ```bash
mongo ds013574.mlab.com:13574/friends-of-sullivan -u <dbuser> -p <dbpassword>
```

 - Export data to CSV, with output into app route directory
 
 ```bash
mongoexport -h ds013574.mlab.com:13574 -d friends-of-sullivan -c users -u master-user -p xxx -o users.csv --csv -f name,fields[Name],fields[Email]
```

 - Access to the DB can be done via a mLab user portal as well.

 ```bash
  link:  //mlab.com/home
  user: "profitbees-dev"
  account: "Profitbees" 
  PW:  see FOS admin

 ````

 ## App Hosting

  - Currently the website is hosted via Azure, through a Profitbees account subscription.

 ```bash
 link: https://portal.azure.com/
 UN:  mark.elliott@codebelfast.com
 PW: see Profitbees or FOS admin
 ```

 ## Domain hosting

   - The domain subscription is paid to 123-Reg.
   - For details on login please see FOS admin.

 ## DNS 

  - DNS settings are setup within the advanced settings of the domain provider ( 123-Reg )
  - Azure provides a static IPv4 address for A record setup, and can be accessed through the App hosting portal.
  - CNAME for www is pointed toward the .azurewebsites.net address.

  ## Technology stack

   - NodeJS | Express | MongoDB | Azure