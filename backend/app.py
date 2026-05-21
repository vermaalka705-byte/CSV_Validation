from flask import Flask, render_template
from flask_cors import CORS
from config import Config
from extensions import db, jwt, migrate

app = Flask(
    __name__,
    template_folder="templates",
    static_folder="static"
)

app.config.from_object(Config)

CORS(app)

db.init_app(app)
jwt.init_app(app)
migrate.init_app(app, db)


@app.route("/")
def login():
    return render_template("login.html")


@app.route("/dashboard")
def dashboard():
    return render_template("dashboard.html")


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)