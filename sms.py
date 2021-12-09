import pandas as pd
from twilio.rest import Client

data=pd.read_csv("data.csv")
eadata =" "
eadata='There is an Earthquake in '+data.Country+' with '+data.Magnitude+" at "+data.Time+" and affected "+data.People
data = eadata[0]
for i in eadata[1:10]:
    data=data+'\n'+i

account_sid = '-'
auth_token = '-'
client = Client(account_sid, auth_token)

message = client.messages.create(
                              body=data,
                              from_='-',
                              to='-'
                          )
print(message.sid)
