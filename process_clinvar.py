import pandas as pd

clinvar_df = pd.read_csv("./gh3665.processed.clinvar.short.txt", sep="\t", header=None)
clinvar_df[5] = clinvar_df[5].apply(lambda x: str(x).replace("CLNDN=", "") if "CLNDN=" in str(x) else x)
clinvar_df[6] = clinvar_df[6].apply(lambda x: str(x).replace("CLNSIG=", "") if "CLNSIG=" in str(x) else x)
clinvar_df[2] = clinvar_df[2].apply(lambda x: str(x).split(";")[0] if ";" in str(x) else x)
#print(clinvar_df.head(50))
clinvar_df.to_csv("gh3665.final.result.txt", sep="\t", index=False, header=False)
#print(clinvar_df[clinvar_df[6] == "Pathogenic"])
#print(clinvar_df[5].value_counts())
#clinvar_df[5].value_counts().to_csv("Diseases_list.txt")