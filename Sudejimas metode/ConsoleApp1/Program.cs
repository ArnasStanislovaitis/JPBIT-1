using System;

namespace ConsoleApp1
{
    class Program
    {
        static void Main(string[] args)
        {

            int Skaicius = 9;
            int Skaicius2 = 19;
            ManoMetodas(Skaicius , Skaicius2 );
                     
        }
        
        static void ManoMetodas(int kintamasis, int kintamasis2)
                
        {
            int skaiciuSuma = kintamasis + kintamasis2;
            Console.WriteLine(skaiciuSuma);
        }
    }
}
