import pandas as pd
import numpy as np
import re
import argparse

def fix(af, dis):
    if "CLNDN=" in af:
        return af
    else: return dis
        


def desease_filter(d):
    if not type(d) == float:
        if re.search("progeria", d, re.IGNORECASE) or re.search("alzheimer", d, re.IGNORECASE) or re.search("parkinson", d, re.IGNORECASE) \
            or re.search("cardiovascular", d, re.IGNORECASE) or re.search("arthrit", d, re.IGNORECASE):  
            return d
        else: return np.nan
    else: return np.nan

def classify(d):
    if re.search("progeria", d, re.IGNORECASE):
        return "progeria"
    elif re.search("alzheimer", d, re.IGNORECASE):
        return "alzheimer"
    elif re.search("parkinson", d, re.IGNORECASE):
        return "parkinson"
    elif re.search("cardiovascular", d, re.IGNORECASE):
        return "cardiovascular"
    elif re.search("arthrit", d, re.IGNORECASE):
        return "arthrit"


if "name" == "__main__":
    
    parser = argparse.ArgumentParser()
    parser.add_argument('-d', "--dis", required=True, help='clinvar diseases data', nargs='+')
    parser.add_argument('-a', "--al", required=True, help='Allel frequeicies from clinvar')
    args = parser.parse_args()

    clinvar_path, af_path = args.dis, args.al

    clinvar = pd.read_csv(clinvar_path, sep="\t", header=None)
    af_df = pd.read_csv(af_path, sep="\t", names=[0,1,2,3,4,"AF"])

    clinvar_df = pd.merge(clinvar, af_df, on=[0,1,2,3,4], how="left")

    clinvar_df[5] = clinvar_df[5].apply(lambda x: str(x).replace("CLNDN=", "") if "CLNDN=" in str(x) else x)
    clinvar_df[6] = clinvar_df[6].apply(lambda x: str(x).replace("CLNSIG=", "") if "CLNSIG=" in str(x) else x)
    clinvar_df["AF"] = clinvar_df["AF"].apply(lambda x: str(x).replace("AF_EXAC=", "") if "AF_EXAC=" in str(x) else x)
    clinvar_df[2] = clinvar_df[2].apply(lambda x: str(x).split(";")[0] if ";" in str(x) else x)
    clinvar_df[5] = clinvar_df.apply(lambda x: desease_filter(x[5]), axis=1)
    clinvar_df = clinvar_df.dropna()
    clinvar_df["class"] = clinvar_df.apply(lambda x: classify(x[5]), axis=1)


    for des in ["progeria", "alzheimer", "parkinson", "cardiovascular", "arthrit"]:
        clinvar_df[clinvar_df["class"] == des][[2, 6, "AF"]].to_csv(f"./result_{des}.txt", sep="\t", index=False, header=False)
