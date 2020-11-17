from flask_wtf import FlaskForm
from wtforms import StringField,IntegerField
from wtforms.validators import InputRequired,Email,NumberRange,AnyOf

SELECT_COLORS= ["red","green","orange","blue"]

class LuckyForm(FlaskForm):
    """using the validator to request the lucky form"""
    class Meta:
        csrf = False
    
    name = StringField(
        "Name", validators=[InputRequired()]
    )

    email = StringField(
        "Email",
        validators=[InputRequired(),Email()]
    )

    year = IntegerField(
        "Year",
        validators=[NumberRange(1900,2000)]
    )

    color = StringField(
        "Favorite Color",
        validators=[AnyOf(SELECT_COLORS)]
    )