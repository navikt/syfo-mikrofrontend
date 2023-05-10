import { dialogmoteUrl } from "../../../api/urls";
import { logEvent } from "../../../amplitude/amplitude";
import { LeftColumn } from "../../columns/LeftColumn";
import { Column } from "../../columns/Column";
import React from "react";
import { BasePanel } from "../BasePanel";
import { LinkBox } from "../../infobox/LinkBox";
import { ExclamationmarkTriangleIcon } from "@navikt/aksel-icons";
import { StatusBox } from "../../infobox/StatusBox";

export const MotebehovPanel = () => {
  return (
    <BasePanel>
      <LeftColumn text={"Vurder behov for dialogmøte"} />

      <Column gap={"0.5rem"}>
        <StatusBox
          text="Du har ikke svart"
          icon={<ExclamationmarkTriangleIcon title="Du har ikke svart" fontSize="1.5rem" />}
          background={"var(--surface-warning-subtle-hover, #FFD799);"}
        />
        <LinkBox
          text="Gi din vurdering"
          href={`${dialogmoteUrl}/motebehov/svar`}
          onClick={() => logEvent("Navigerer til svar møtebehov")}
        />
      </Column>
    </BasePanel>
  );
};
