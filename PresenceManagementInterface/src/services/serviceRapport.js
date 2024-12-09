import http from "./auth/axiosAPI";

const useRapport = () => {
    const getAllRapports = async () => {
        try {
            const rapport = await http.get(`/listeRapports`);
            return rapport.data;
        } catch (error) {
            console.error("Erreur lors de la récupération du rapport : ", error);
            throw error;
        }
    };

    return { getAllRapports };
}

export default useRapport;