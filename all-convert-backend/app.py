from flask import Flask, request, send_file
from flask_cors import CORS
from converters import convert_image
import os
from werkzeug.utils import secure_filename

app = Flask(__name__)
CORS(app)
UPLOAD_FOLDER = './uploads'
os.makedirs(UPLOAD_FOLDER, exist_ok=True)

@app.route('/convert', methods=['POST'])
def convert():
    if 'file' not in request.files or 'format' not in request.form:
        return 'No file or format provided', 400
    
    file = request.files['file']
    format = request.form['format'].lower()
    
    filename = secure_filename(file.filename)
    filepath = os.path.join(UPLOAD_FOLDER, filename)
    file.save(filepath)

    output_path = convert_image(filepath, format)
    
    return send_file(output_path, mimetype='image/' + format)

if __name__ == '__main__':
    app.run(debug=True)
