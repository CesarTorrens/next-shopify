interface ErrorPageProps {
  error: Error;
  reset: () => void;
}

type ProductType = {
  id: string;
  title: string;
  description: string;
  price: number;
  image: string;
  quantity: number;
  handle: string;
  tags: string;
  gql_id: string;
};

interface collections {
  id: number;
  handle: string;
  title: string;
  updated_at: string;
  body_html: string;
  published_at: string;
  sort_order: string;
  template_suffix: string;
  disjunctive: boolean;
  rules: any[];
  published_scope: string;
  admin_graphql_api_id: string;
};

type CartItem = {
  title: string;
  price: number;
  quantity: number;
  id: string;
  image: string;
  merchandiseId: string;
}