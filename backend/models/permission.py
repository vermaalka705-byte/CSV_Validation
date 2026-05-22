from extensions import db


class Permission(db.Model):
    __tablename__ = "permissions"

    id = db.Column(db.BigInteger, primary_key=True)
    permission_key = db.Column(db.String(100), unique=True)
    permission_name = db.Column(db.String(255))
    module_name = db.Column(db.String(100))