import { DocumentComponent } from "../../../types/client/brev";
import { Brev } from "../../../types/shared/brev";
import { leggTilDagerPaDato } from "../../../utils/dateUtils";

export const createDocumentComponent = (props?: Partial<DocumentComponent>): DocumentComponent => {
  return {
    type: "PARAGRAPH",
    title: "TEST_HEADER",
    texts: ["Test_text_1", "Test_text_2"],
    key: "ARBEIDSRETTET_REHABILITERING",
    ...props,
  };
};

export const createInnkallingsBrev = (props?: Partial<Brev>): Brev => {
  return {
    uuid: "brev_uuid",
    deltakerUuid: "deltaker_uuid",
    createdAt: leggTilDagerPaDato(new Date(), -7).toISOString(),
    brevType: "INNKALT",
    digitalt: true,
    fritekst: "Her kommer det en fritekst",
    sted: "sted-felt",
    tid: leggTilDagerPaDato(new Date(), -7).toISOString(),
    videoLink: "videolenke-felt",
    document: [createDocumentComponent(), createDocumentComponent()],
    virksomhetsnummer: "virksomhetsnummer-felt",
    lestDato: null,
    svar: null,
    ...props,
  };
};

export const createEndringsBrev = (props?: Partial<Brev>): Brev => {
  return {
    ...createInnkallingsBrev({ brevType: "NYTT_TID_STED" }),
    ...props,
  };
};

export const createReferatBrev = (props?: Partial<Brev>): Brev => {
  return {
    ...createInnkallingsBrev(),
    brevType: "REFERAT",
    createdAt: leggTilDagerPaDato(new Date(), -67).toISOString(),
    tid: leggTilDagerPaDato(new Date(), -77).toISOString(),
    ...props,
  };
};
