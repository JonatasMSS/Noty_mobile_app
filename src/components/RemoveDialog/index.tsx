import { Alert, AlertStatic } from "react-native";

interface RemoveDialogProps {
  onYes?(value?: string | undefined): void | undefined;
  onCancel?(value?: string | undefined): void | undefined;
  onDimissed?(value?: string | undefined): void | undefined;
}

export default function RemoveDialog({
  onCancel,
  onDimissed,
  onYes,
}: RemoveDialogProps) {
  return Alert.alert(
    "Remover Nota",
    "Tem certeza que deseja remover esta nota?",
    [
      {
        text: "Sim",
        onPress: onYes,
        style: "default",
      },
      {
        text: "Cancelar",
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
