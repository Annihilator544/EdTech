import { Card, CardContent } from "./ui/card";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";

function MeetYourMentors() {
    const mentors = [
        'https://images.unsplash.com/photo-1728049803398-42260c68e9fd',
        'https://images.unsplash.com/photo-1519699047748-de8e457a634e',
        'https://images.unsplash.com/photo-1534528741775-53994a69daeb',
        'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04',
        'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d',
        'https://images.unsplash.com/photo-1521119989659-a83eee488004',
        'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6',
        'https://images.unsplash.com/photo-1536896407451-6e3dd976edd1',
        'https://images.unsplash.com/photo-1614204424926-196a80bf0be8',
        'https://images.unsplash.com/photo-1531384441138-2736e62e0919',
        'https://images.unsplash.com/photo-1580489944761-15a19d654956',
        'https://images.unsplash.com/photo-1529139574466-a303027c1d8b'
    ]
  return (
    <div>
      <h1 className=" text-4xl font-semibold text-white p-8">Meet your mentors</h1>
      <Carousel className="w-full mt-10" opts={{ loop: true }}>
            <CarouselContent className="-ml-1">
              {mentors.map((imgURL, index) => (
                <CarouselItem key={index} className="pl-1  lg:basis-1/6">
                  <div className="p-1 ">
                    <Card className="overflow-hidden">
                      <CardContent className="flex aspect-square items-center relative justify-center p-0 ">
                        {/* random person potrait from unsplash */}
                        <img
                          src={imgURL}
                          alt="mentor"
                          className="object-cover w-full h-full"
                        />
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
    </div>
  );
}

export default MeetYourMentors;