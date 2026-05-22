from models.user import User
from werkzeug.security import check_password_hash


def authenticate_user(email, password):
    user = User.query.filter_by(email=email).first()

    if not user:
        return None

    if not check_password_hash(user.password_hash, password):
        return None

    return user