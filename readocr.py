import easyocr
import cv2

# reader = easyocr.Reader(["ko", "en"])
reader = easyocr.Reader(["ko"], recog_network="custom")
img_path2 = cv2.imread(
    "/Users/qqwaseoke/Documents/SK_Shieldus_Rookies_1st/Project/PJT3_PayDay/TRDG2DTRB/output/images/image_00.jpg"
)
result2 = reader.readtext(img_path2)
print(result2)

for bbox, text, prob in result2:
    print(f"{text}")
