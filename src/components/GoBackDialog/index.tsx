import { Alert, AlertStatic } from "react-native";

interface GoBackDialogProps {
  onYes?(value?: string | undefined): void | undefined;
  onCancel?(value?: string | undefined): void | undefined;
  onDimissed?(value?: string | undefined): void | undefined;
}

export default function GoBackDialog({
  onCancel,
  onDimissed,
  onYes,
}: GoBackDialogProps) {
  return Alert.alert(
    "Salvar alterações",
    "Deseja salvar suas alterações?",
    [
      {
        text: "Sim",
        onPress: onYes,
        style: "default",
      },
      {
        text: "Não",
        onPress: onCancel,
        style: "cancel",
      },
    ],
    {
      cancelable: true,
      onDismiss: onDimissed,
    }
  );
}
