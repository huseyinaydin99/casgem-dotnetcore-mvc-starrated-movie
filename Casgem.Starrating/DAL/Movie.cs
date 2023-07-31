namespace Casgem.Ajax.DAL
{
    public class Movie
    {
        public int MovieId { get; set; }
        public string Title { get; set; }
        public string IMDB { get; set; }
        public DateTime ReleaseDate { get; set; }
        public byte Rating { get; set; }
        public string ImageUrl { get; set; }
    }
}