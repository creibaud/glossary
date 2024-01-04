import connectionToDatabase from "../connection/mongodb";
import TermModel from "../models/term.model";

type addProps = {
    term: string,
    meaning: string,
    links: string[]
}

type patchProps = {
    term: string,
    newTerm: string,
    meaning: string,
    links: string[]
}

const getAllTerms = async () => {
    await connectionToDatabase();
    return TermModel.find({}).sort({ term: 1 });
};

const getTerm = async (term: string) => {
    await connectionToDatabase();

    const termData = await TermModel.findOne({ term: term });

    if (termData) {
        return termData;
    } else {
        return null;
    }
};

const addTerm = async ({ term, meaning, links }: addProps) => {
    await connectionToDatabase();

    const newTerm = new TermModel({
        term,
        meaning,
        links
    });

    const saved = newTerm.save();

    if (saved) {
        console.log("[+] New term is added");
        return true;
    } else {
        console.log("[-] New term is not added");
        return false;
    }
};

const patchTerm = async ({ term, newTerm, meaning, links }: patchProps) => {
    await connectionToDatabase();

    const termData = await TermModel.findOne({ term: term });
    const newTermIsUnique = await TermModel.findOne({ term: newTerm });

    if (termData) {
        if (newTermIsUnique) {
            console.log("[!] New term is not unique");
            return false;
        } else {
            termData.term = newTerm;
            termData.meaning = meaning;
            termData.links = links;
            termData.updateAt = Date.now();

            const saved = termData.save();

            if (saved) {
                console.log("[+] Term is updated");
                return true;
            } else {
                console.log("[-] Term is not updated");
                return false;
            }
        }
    } else {
        console.log("[!] Term is not found");
        return false;
    }
};

const removeTerm = async (term: string) => {
    await connectionToDatabase();

    const termData = await TermModel.findOne({ term: term });

    if (termData) {
        const saved = termData.save();

        if (saved) {
            console.log("[+] Term is updated");
            return true;
        } else {
            console.log("[-] Term is not updated");
            return false;
        }
    } else {
        console.log("[!] Term is not found");
        return false;
    }
};

export { getAllTerms, getTerm, addTerm, patchTerm, removeTerm };