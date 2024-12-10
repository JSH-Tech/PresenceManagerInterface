import http from "./auth/axiosAPI";

const useRapport = () => {
    const getAllRapports = async () => {
        try {
            const rapport = await http.get(`/rapports/listRapports`);
            return rapport.data;
        } catch (error) {
            console.error("Erreur lors de la récupération du rapport : ", error);
            throw error;
        }
    };
    const deleteRapport = async (id) => {
        try {

            const rapport = await http.delete(`/rapports/suprimer/${id}`);
            return rapport.data;
        } catch (error) {
            console.error("Erreur lors de la récupération du rapport : ", error);
            throw error;
        }
    };

    return { getAllRapports, deleteRapport };
}

export default useRapport;