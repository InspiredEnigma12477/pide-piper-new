import datetime as dt

today = dt.date.today()


def auth():
    print("Username : ")
    name = input()
    print("Password : ")
    password = input()

    if name == "admin":
        if password == "admin123":
            print(f"logged in at {today}")
            return True
        else:
            print("Wrong password")
            return False
    else:
        print("Wrong username")
        return False

def Menu():
    print("***** Menu ******")code 
    print(" 1. Edit Profile")
    print(" 2. Add a Assignment")
    print(" 3. Exam")

print("Welcome")
print("Please login to continue")
auth_flag = auth()

if auth_flag == True:
    Menu()