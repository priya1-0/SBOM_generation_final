import subprocess from os.execv

from flask import Flask, request, render_template

app = Flask(__name__, template_folder='C:/Users/pradhs10/OneDrive - Medtronic PLC/Desktop/SSL scan interface')

 
@app.route('/', methods =["GET", "POST"])

def hello():

    return render_template("index.html")


@app.route('/response', methods =["GET", "POST"])

def response():

    domain = request.form.get("domain")

    #output1 = os.system(f'sslscan.exe {domain}')

    output1 = subprocess.getoutput(f'sslscan.exe --no-colour {domain}')

    return render_template("index.html", domain=domain, output=output1)

 
if __name__ == '__main__':

app.run()
