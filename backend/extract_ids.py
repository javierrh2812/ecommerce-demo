import json
from services.superpet import SuperPet

def main():

    dogs_body = {
            "auid": "mundo_perro",
            "scid": "c8393a3a9e64b8effd070730e5",
            "pid0": "AP000034_m",
            "pid1": "AP000791_m",
            "pid2": "AP000035_m",
            "pid3": "AP000793_m",
            "pid4": "AP000039_m",
            "pid5": "AP000037_m",
            "pid6": "AP000270",
            "pid7": "AP001364_m",
            "pid8": "AP001143_m",
            "pid9": "AP000792_m",
            "pid10": "AP001070",
            "pid11": "AP001174_m",
            "pid12": "AP000301_m",
            "pid13": "AP000310_m",
            "pid14": "AP000209",
            "pid15": "AP001178_m",
            "pid16": "AP000790_m",
            "pid17": "AP001072_m",
            "pid18": "AP000014_m",
            "pid19": "AP000178_m",
            "pid20": "AP001141_m",
            "pid21": "AP001185_m",
            "pid22": "AP000812",
            "pid23": "AP000269_m",
            "pid24": "AP001073_m",
            "pid25": "AP000272_m",
            "pid26": "AP000312_m",
            "pid27": "AP000322_m",
            "pid28": "AP000180",
            "pid29": "AP000388_m",
            "pid30": "AP000578",
            "pid31": "AP000789_m"
        }

    cats_body = {
            "auid": "mundo_gato",
            "scid": "c79afab7b88bab069a3ed123ca",
            "pid0": "AG000013_m",
            "pid1": "MD005123",
            "pid2": "HC000017_m",
            "pid3": "AG000012_m",
            "pid4": "AG000423",
            "pid5": "HC000486_m",
            "pid6": "HC000765",
            "pid7": "HC000674_m",
            "pid8": "FF000677",
            "pid9": "AG000011_m",
            "pid10": "PG000039",
            "pid11": "HC000336_m",
            "pid12": "AG000228",
            "pid13": "PS000361",
            "pid14": "MD002957",
            "pid15": "AG000152_m",
            "pid16": "PS000341",
            "pid17": "AG000229",
            "pid18": "AG000559_m",
            "pid19": "PS000336",
            "pid20": "AG000245",
            "pid21": "AG000093",
            "pid22": "AG000069",
            "pid23": "HC000434_m",
            "pid24": "PG000046",
            "pid25": "AP000810",
            "pid26": "AG000561",
            "pid27": "AG000383",
            "pid28": "AG000124_m",
            "pid29": "AG000120_m",
            "pid30": "HC000006_m",
            "pid31": "PS000720_m"
        }

    sp = SuperPet()

    dogs_data = sp.extract_data(method="post", data=dogs_body)
    cats_data = sp.extract_data(method="post", data=cats_body)
    others_data = sp.extract_data(method="get", path="otras-mascotas")

    with open("data/dogs.json", 'w', encoding='utf-8') as f:
        json.dump(dogs_data, f, indent=2)

    with open("data/cats.json", 'w', encoding='utf-8') as f:
        json.dump(cats_data, f, indent=2)

    with open("data/others.json", 'w', encoding='utf-8') as f:
        json.dump(others_data, f, indent=2)

if __name__ == '__main__':
    main()
