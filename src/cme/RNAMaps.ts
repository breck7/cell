// Create Dictionaries to map tRNAs to associated aa abbreviations in protein sequences.
export const aaMap = new Map<string, string>([
  ["A", "M_ala__L_c"],
  ["R", "M_arg__L_c"],
  ["N", "M_asn__L_c"],
  ["D", "M_asp__L_c"],
  ["C", "M_cys__L_c"],
  ["E", "M_glu__L_c"],
  ["Q", "M_gln__L_c"],
  ["G", "M_gly_c"],
  ["H", "M_his__L_c"],
  ["I", "M_ile__L_c"],
  ["L", "M_leu__L_c"],
  ["K", "M_lys__L_c"],
  ["M", "M_met__L_c"],
  ["F", "M_phe__L_c"],
  ["P", "M_pro__L_c"],
  ["S", "M_ser__L_c"],
  ["T", "M_thr__L_c"],
  ["W", "M_trp__L_c"],
  ["Y", "M_tyr__L_c"],
  ["V", "M_val__L_c"],
  ["*", "Stop_Codon"]
]);

export const aaTRNAMap = new Map<string, string>([
  ["A", "M_alatrna_c"],
  ["R", "M_argtrna_c"],
  ["N", "M_asntrna_c"],
  ["D", "M_asptrna_c"],
  ["C", "M_cystrna_c"],
  ["E", "M_glutrna_c"],
  ["Q", "M_glntrna_c"],
  ["G", "M_glytrna_c"],
  ["H", "M_histrna_c"],
  ["I", "M_iletrna_c"],
  ["L", "M_leutrna_c"],
  ["K", "M_lystrna_c"],
  ["M", "M_mettrna_c"],
  ["F", "M_phetrna_c"],
  ["P", "M_protrna_c"],
  ["S", "M_sertrna_c"],
  ["T", "M_thrtrna_c"],
  ["W", "M_trptrna_c"],
  ["Y", "M_tyrtrna_c"],
  ["V", "M_valtrna_c"]
]);

export const aaTRNAFreeMap = new Map<string, string>([
  ["A", "M_trnaala_c"],
  ["R", "M_trnaarg_c"],
  ["N", "M_trnaasn_c"],
  ["D", "M_trnaasp_c"],
  ["C", "M_trnacys_c"],
  ["E", "M_trnaglu_c"],
  ["Q", "M_trnagln_c"],
  ["G", "M_trnagly_c"],
  ["H", "M_trnahis_c"],
  ["I", "M_trnaile_c"],
  ["L", "M_trnaleu_c"],
  ["K", "M_trnalys_c"],
  ["M", "M_trnamet_c"],
  ["F", "M_trnaphe_c"],
  ["P", "M_trnapro_c"],
  ["S", "M_trnaser_c"],
  ["T", "M_trnathr_c"],
  ["W", "M_trnatrp_c"],
  ["Y", "M_trnatyr_c"],
  ["V", "M_trnaval_c"]
]);

export const aaCostMap = new Map<string, string>([
  ["A", "ALA_cost"],
  ["R", "ARG_cost"],
  ["N", "ASN_cost"],
  ["D", "ASP_cost"],
  ["C", "CYS_cost"],
  ["E", "GLU_cost"],
  ["Q", "GLN_cost"],
  ["G", "GLY_cost"],
  ["H", "HIS_cost"],
  ["I", "ILE_cost"],
  ["L", "LEU_cost"],
  ["K", "LYS_cost"],
  ["M", "MET_cost"],
  ["F", "PHE_cost"],
  ["P", "PRO_cost"],
  ["S", "SER_cost"],
  ["T", "THR_cost"],
  ["W", "TRP_cost"],
  ["Y", "TYR_cost"],
  ["V", "VAL_cost"],
  ["FM", "FMET_cost"]
]);

export const ctRNAcostMap = new Map<string, string>([
  ["M_alatrna_c", "ALA_cost"],
  ["M_argtrna_c", "ARG_cost"],
  ["M_asntrna_c", "ASN_cost"],
  ["M_asptrna_c", "ASP_cost"],
  ["M_cystrna_c", "CYS_cost"],
  ["M_glutrna_c", "GLU_cost"],
  ["M_glntrna_c", "GLN_cost"],
  ["M_glytrna_c", "GLY_cost"],
  ["M_histrna_c", "HIS_cost"],
  ["M_iletrna_c", "ILE_cost"],
  ["M_leutrna_c", "LEU_cost"],
  ["M_lystrna_c", "LYS_cost"],
  ["M_mettrna_c", "MET_cost"],
  ["M_phetrna_c", "PHE_cost"],
  ["M_protrna_c", "PRO_cost"],
  ["M_sertrna_c", "SER_cost"],
  ["M_thrtrna_c", "THR_cost"],
  ["M_trptrna_c", "TRP_cost"],
  ["M_tyrtrna_c", "TYR_cost"],
  ["M_valtrna_c", "VAL_cost"]
]);