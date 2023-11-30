export declare global {
    namespace ReactNavigation {
        interface RootParamList {
            home: undefined;
            note: {
                noteTitle: string;
                noteContent: string;
                noteID: string;
            } | undefined;
        }
    }
}