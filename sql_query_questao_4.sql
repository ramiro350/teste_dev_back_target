SELECT 
    c.codigo,
    c.razao_social,
    t.numero
FROM 
    Clientes c
INNER JOIN 
    Telefones t ON c.codigo = t.cliente_id
INNER JOIN
    Estados e ON c.estado_id = e.id
WHERE 
    e.nome = 'São Paulo';