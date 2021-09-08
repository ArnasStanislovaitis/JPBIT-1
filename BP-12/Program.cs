using System;

namespace Fraziu_spausdintuvas
{
    class Program
    {
        static void Main(string[] args)
        {
           

        }

        static void FraziuSpausdintuvas()
        {
            Console.WriteLine("Iveskite fraz");
            string Fraze = Console.ReadLine();
            Console.WriteLine("Iveskite kiek kartu norite isvesti fraze i ekrana");
            int Kartai = int.Parse(Console.ReadLine());
            for (int i = 0; i < Kartai; i++)
            {
                Console.Write(Fraze);
            }

        }
    }
}
