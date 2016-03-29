export class AuthorsService {
    getAuthors():Object[] {
        return [
            {name: 'Annemie Heymans', isFavorite: true},
            {name: 'Remco Campert', isFavorite: false},
            {name: 'Antoon Coolen', isFavorite: false},
            {name: 'Arnon Grunberg', isFavorite: true}
        ];
    }
}
