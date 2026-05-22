from flask import Blueprint, jsonify
from flask_jwt_extended import jwt_required
from extensions import db
from sqlalchemy import text

modules_bp = Blueprint("modules", __name__)

@modules_bp.route("/", methods=["GET"])
@jwt_required()
def get_modules():
    result = db.session.execute(
        text("""
            SELECT module_name, route_path, icon
            FROM modules
            WHERE is_active = 1
            ORDER BY display_order
        """)
    )

    modules = []

    for row in result:
        modules.append({
            "name": row.module_name,
            "route": row.route_path,
            "icon": row.icon
        })

    return jsonify(modules)