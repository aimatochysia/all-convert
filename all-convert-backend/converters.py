from PIL import Image
import os

def convert_image(filepath, output_format):
    img = Image.open(filepath)
    output_file = os.path.splitext(filepath)[0] + '.' + output_format
    img.save(output_file, output_format.upper())
    return output_file
