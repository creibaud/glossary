import { getAllTerms, addTerm, patchTerm, removeTerm } from "@/utils/actions/term.action";
import { NextRequest, NextResponse } from "next/server";

const GET = async () => {
    const terms = await getAllTerms();
    return NextResponse.json(terms);
};

const POST = async (req: NextRequest) => {
    const { term, meaning, links } = await req.json();

    if (term && meaning) {
        const response =  await addTerm({ term, meaning, links });

        if (response) {
            return NextResponse.json({ message : "New term is added"});
        } else {
            return NextResponse.json({ message : "New term is not added"});
        }
    }
};

const PATCH = async (req: NextRequest) => {
    const { term, newTerm, meaning, links } = await req.json();

    if (term && newTerm && meaning) {
        const response = await patchTerm({ term, newTerm, meaning, links });
        
        if (response) {
            return NextResponse.json({ message : "Term is updated"});
        } else {
            return NextResponse.json({ message : "Term is not updated"});
        }
    }
};

const DELETE = async (req: NextRequest) => {
    const { term } = await req.json();

    if (term) {
        const response = await removeTerm(term);
        
        if (response) {
            return NextResponse.json({ message : "Term is removed"});
        } else {
            return NextResponse.json({ message : "Term is not removed"});
        }
    }
};

export { GET, POST, PATCH, DELETE };