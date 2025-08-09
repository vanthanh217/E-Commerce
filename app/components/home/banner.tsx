import banner from '@/assets/images/banner.jpg';
import { Button } from '@/components/ui';

const Banner = () => {
  return (
    <section
      className="relative h-96 bg-cover bg-center"
      style={{ backgroundImage: `url(${banner})` }}
    >
      <div className="absolute inset-0 bg-black/30"></div>
      <div className="relative mx-auto flex h-full max-w-7xl items-center px-4 sm:px-6 lg:px-8">
        <div className="mt-7 w-full">
          <div className="max-w-2xl">
            <h2 className="mb-4 text-4xl font-bold text-white md:text-5xl">
              Bộ sưu tập giày mới 2025
            </h2>
            <p className="mb-8 text-xl text-gray-200">
              Khám phá những mẫu giày thời trang mới nhất với chất lượng cao và
              giá cả hợp lý
            </p>
            <Button>Mua sắm ngay</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
