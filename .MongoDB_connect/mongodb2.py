import pymongo

myclient = pymongo.MongoClient("mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false")

mydb = myclient["mydatabase"]
mycol = mydb["customers"]


#mydict = {"_id":1, "name": "Jim", "address": "Highway 38" }
#mydict = {"_id":2, "name": "Joshua", "address": "Highway 39" }
#mydict = {"_id":3, "name": "Kim", "address": "Highway 40" }
#mydict = {"_id":4, "name": "สวัสดี", "address": "Highway 41" }
#mydict = {"_id":5, "name": "กิน", "address": "Highway 42" }

#x = mycol.insert_one(mydict)

x = mycol.find_one()

for x in mycol.find({},{ "_id": 0, "name": 1, "address": 1 }):
  print(x)