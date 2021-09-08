using System;

namespace BP_16
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Iveskite savo varda");
            string Vardas = Console.ReadLine();
            Console.WriteLine("Iveskte savo el Pasto adresa");
            string ElPastas = Console.ReadLine();

            MetodasIsvedamATS(Vardas, ElPastas);

        }
            static void MetodasIsvedamATS(string x,string y)
        {
            Console.WriteLine("Ivedziau Varda: ", x);
            Console.WriteLine("Ivedziau El.Pasta: ", y);
        }

    }
}
