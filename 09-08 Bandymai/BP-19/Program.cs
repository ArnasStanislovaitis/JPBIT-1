using System;

namespace GitHub_skaiciuotuvas
{
    class Program
    {
        static void Main(string[] args)
        {
            while (true)
            {
                Console.WriteLine("\nIveskite pasirinkima \n1.Lyginiu skaiciu spausdimas \n2.Nelyginiu skaiciu spausdimas\n3. Sudetis \n4.Atimtis \n5.Dalyba \n6.Daugyba");
                int Pasirinkimas = int.Parse(Console.ReadLine());
                if (Pasirinkimas == 1)
                {
                    LyginiuMetodas();
                }
                if (Pasirinkimas == 2)
                {
                    NelyginiuMetodas();
                }
                if (Pasirinkimas == 3)
                {
                    Sudetis();
                }
                if (Pasirinkimas == 4)
                {
                    Atimtis();
                }
                if (Pasirinkimas == 5)
                {
                    Dalyba();
                }
                if (Pasirinkimas == 6)
                {
                    Daugyba();
                }
            }
        }
        static void LyginiuMetodas()
        {
            for (int i = 1; i < 11; i++)
            {
                if (i % 2 == 0)
                {
                    Console.WriteLine(i);
                }
            }
        }
        static void NelyginiuMetodas()
        {
            for (int i = 1; i < 11; i++)
            {
                if (i%2 !=0)
                {
                    Console.WriteLine(i);
                }
            }
        }
        static int Sudetis()
        {
            Console.WriteLine("Iveskite pirma skaiciu");
            int Pirmas = int.Parse(Console.ReadLine());            
            Console.WriteLine("Iveskite Antra skaiciu");
            int Antras = int.Parse(Console.ReadLine());
            int Suma = Pirmas + Antras;
            Console.WriteLine(Suma);
            return Suma;
        } 
        static int Atimtis()
        {
            Console.WriteLine("Iveskite pirma skaiciu");
            int Pirmas = int.Parse(Console.ReadLine());
            Console.WriteLine("Iveskite Antra skaiciu");
            int Antras = int.Parse(Console.ReadLine());
            int Rezultatas = Pirmas - Antras;
            Console.WriteLine(Rezultatas);
            return Rezultatas;
        }
        static int Daugyba()
        {
            Console.WriteLine("Iveskite pirma skaiciu");
            int Pirmas = int.Parse(Console.ReadLine());
            Console.WriteLine("Iveskite Antra skaiciu");
            int Antras = int.Parse(Console.ReadLine());
            int Rezultatas = Pirmas * Antras;
            Console.WriteLine(Rezultatas);
            return Rezultatas;
        }
        static double Dalyba()
        {
            Console.WriteLine("Iveskite pirma skaiciu");
            double Pirmas = double.Parse(Console.ReadLine());
            Console.WriteLine("Iveskite Antra skaiciu");
            double Antras = double.Parse(Console.ReadLine());
            double Rezultatas = Pirmas / Antras;
            Console.WriteLine(Rezultatas);
            return Rezultatas;
        }
    }
}
