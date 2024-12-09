import http from "./auth/axiosAPI";

const useRetard = () => {
    const getAllRetards = async () => {
        try {
            const response = await http.get("/listeRetards");
            return response.data;
        }
        catch (error) {
            console.error("Erreur lors de la récupération du rapport : ", error);
            throw error;
        }
    }
    return {getAllRetards}
}

export default useRetard;