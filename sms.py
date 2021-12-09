import pandas as pd
from twilio.rest import Client

data=pd.read_csv("data.csv")
eadata =" "
eadata='There is an Earthquake in '+data.Country+' with '+data.Magnitude+" at "+data.Time+" and affected "+data.People
data = eadata[0]
for i in eadata[1:10]:
    data=data+'\n'+i

account_sid = 'ACeb0fbcf51463eb624079dd7c1dd0d64f'
auth_token = 'b8095eacc65e7db8c5a2c46f9e89ae5a'
client = Client(account_sid, auth_token)

message = client.messages.create(
                              body=data,
                              from_='+16146420071',
                              to='+919871067866'
                          )
print(message.sid)