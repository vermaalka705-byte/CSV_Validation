from extensions import db


class Role(db.Model):
    __tablename__ = "roles"

    id = db.Column(db.BigInteger, primary_key=True)
    role_name = db.Column(db.String(100), unique=True)
    description = db.Column(db.Text)