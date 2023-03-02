from server import mysql, session
from flask import session

class Table:
    def __init__(self, table_name, *args):
        self.table = table_name
        self.columns = "(%s)" %",".join(args)
        self.columnsList = args
    
    def logout(self):
        session.pop("email",None)
        session.pop("logged_in",None)
        session.pop("id",None)
        session.pop("name",None)
        
    def getone(self, search, value):
        cur = mysql.connection.cursor()
        result = cur.execute("SELECT tid, tname, temail, tpass FROM %s WHERE %s = \"%s\"" %(self.table, search, value))
        if result > 0: 
            data = {}; 
            data = cur.fetchone()
            cur.close(); 
            return data

    