from api.auth.routes import auth_bp
from api.modules.routes import modules_bp


def register_blueprints(app):
    app.register_blueprint(auth_bp, url_prefix="/api/auth")
    app.register_blueprint(modules_bp, url_prefix="/api/modules")