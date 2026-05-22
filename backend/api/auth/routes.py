from flask import Blueprint, request, jsonify
from flask_jwt_extended import create_access_token
from api.auth.service import authenticate_user

auth_bp = Blueprint("auth", __name__)


@auth_bp.route("/login", methods=["POST"])
def login_api():
    data = request.get_json()

    email = data.get("email")
    password = data.get("password")

    user = authenticate_user(email, password)

    if not user:
        return jsonify({"message": "Invalid credentials"}), 401

    token = create_access_token(identity=user.id)

    return jsonify({
        "token": token,
        "user": {
            "id": user.id,
            "name": user.full_name,
            "email": user.email
        }
    })