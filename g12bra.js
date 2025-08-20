const { createClient } = require('@supabase/supabase-js');

const SUPABASE_URL = 'https://vlrqrxvkvoxldnqfphlw.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZscnFyeHZrdm94bGRucWZwaGx3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTU1NjkwMzMsImV4cCI6MjA3MTE0NTAzM30.kBQKSWOW3CX1e_2bf6w9hoJ-KJubetxhTdZbXWtK6iA';

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

async function listarClubesComBrasileirao() {
    // Buscar clubes
    const { data: clubes, error: clubesError } = await supabase
        .from('clubes_brasileiros')
        .select('id, nome, estado_id');

    if (clubesError) {
        console.error('Erro ao buscar clubes:', clubesError);
        return;
    }

    // Buscar estados
    const { data: estados, error: estadosError } = await supabase
        .from('estado')
        .select('id, nome');

    if (estadosError) {
        console.error('Erro ao buscar estados:', estadosError);
        return;
    }

    
    const { data: titulos, error: titulosError } = await supabase
        .from('titulos')
        .select('clube_id, quantidade')
        .eq('nome', 'Campeonato Brasileiro');

    if (titulosError) {
        console.error('Erro ao buscar títulos:', titulosError);
        return;
    }

    // Combinar dados
    const resultado = clubes.map(clube => {
        const estado = estados.find(e => e.id === clube.estado_id);
        const titulo = titulos.find(t => t.clube_id === clube.id);
        return {
            nome: clube.nome,
            estado: estado ? estado.nome : 'Desconhecido',
            brasileirao: titulo ? titulo.quantidade : 0
        };
    });

    console.table(resultado);
}

listarClubesComBrasileirao();
